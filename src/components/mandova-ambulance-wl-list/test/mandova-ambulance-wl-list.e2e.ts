import { newE2EPage } from '@stencil/core/testing';

describe('mandova-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<mandova-ambulance-wl-list></mandova-ambulance-wl-list>');

    const element = await page.find('mandova-ambulance-wl-list');
    expect(element).toHaveClass('hydrated');
  });
});
