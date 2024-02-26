import { newE2EPage } from '@stencil/core/testing';

describe('mandova-ambulance-wl-editor', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<mandova-ambulance-wl-editor></mandova-ambulance-wl-editor>');

    const element = await page.find('mandova-ambulance-wl-editor');
    expect(element).toHaveClass('hydrated');
  });
});
