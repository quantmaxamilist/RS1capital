interface Web3FormsResponse {
  success: boolean;
  message?: string;
}

function setStatus(
  el: HTMLElement,
  message: string,
  type: 'success' | 'error' | 'neutral',
): void {
  el.textContent = '';
  el.classList.remove('contact-status-success', 'contact-status-error');

  if (type === 'success') {
    el.classList.add('contact-status-success');
    el.textContent = message;
  } else if (type === 'error') {
    el.classList.add('contact-status-error');
    el.innerHTML = message;
  }
}

export function initContactForm(): void {
  const form = document.getElementById('contact-form') as HTMLFormElement | null;
  const submitBtn = document.getElementById('contact-submit') as HTMLButtonElement | null;
  const statusEl = document.getElementById('contact-status') as HTMLElement | null;

  if (!form || !submitBtn || !statusEl) return;

  const defaultLabel = submitBtn.textContent ?? 'Send enquiry';

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const accessKeyInput = form.querySelector<HTMLInputElement>('input[name="access_key"]');
    const accessKey = accessKeyInput?.value?.trim() ?? '';

    if (!accessKey) {
      setStatus(
        statusEl,
        'The contact form is not configured yet. Please email us at <a href="mailto:info@rs1.uk">info@rs1.uk</a>.',
        'error',
      );
      return;
    }

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending…';
    setStatus(statusEl, '', 'neutral');

    const formData = new FormData(form);
    const payload: Record<string, string> = {};

    formData.forEach((value, key) => {
      if (typeof value === 'string') {
        payload[key] = value;
      }
    });

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as Web3FormsResponse;

      if (response.ok && result.success) {
        setStatus(
          statusEl,
          "Thanks — we've received your enquiry and will be in touch shortly.",
          'success',
        );
        form.reset();
      } else {
        throw new Error(result.message ?? 'Submission failed');
      }
    } catch {
      setStatus(
        statusEl,
        'Something went wrong sending your enquiry. Please try again or email us at <a href="mailto:info@rs1.uk">info@rs1.uk</a>.',
        'error',
      );
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = defaultLabel;
    }
  });
}
