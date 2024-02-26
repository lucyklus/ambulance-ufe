import { newE2EPage } from '@stencil/core/testing';

describe('mandova-ambulance-wl-app', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<mandova-ambulance-wl-app></mandova-ambulance-wl-app>');

    const element = await page.find('mandova-ambulance-wl-app');
    expect(element).toHaveClass('hydrated');
  });
});
