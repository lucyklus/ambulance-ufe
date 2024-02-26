import { newSpecPage } from '@stencil/core/testing';
import { MandovaAmbulanceWlEditor } from '../mandova-ambulance-wl-editor';

describe('mandova-ambulance-wl-editor', () => {
  it('buttons shall be of different type', async () => {
    const page = await newSpecPage({
      components: [MandovaAmbulanceWlEditor],
      html: `<mandova-ambulance-wl-editor entry-id="@new"></mandova-ambulance-wl-editor>`,
    });
    let items: any = await page.root.shadowRoot.querySelectorAll('md-filled-button');
    expect(items.length).toEqual(1);
    items = await page.root.shadowRoot.querySelectorAll('md-outlined-button');
    expect(items.length).toEqual(1);

    items = await page.root.shadowRoot.querySelectorAll('md-filled-tonal-button');
    expect(items.length).toEqual(1);
  });
});
