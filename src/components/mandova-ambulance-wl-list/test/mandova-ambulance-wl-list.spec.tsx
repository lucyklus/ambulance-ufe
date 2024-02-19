import { newSpecPage } from '@stencil/core/testing';
import { MandovaAmbulanceWlList } from '../mandova-ambulance-wl-list';

describe('mandova-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MandovaAmbulanceWlList],
      html: `<mandova-ambulance-wl-list></mandova-ambulance-wl-list>`,
    });
    expect(page.root).toEqualHtml(`
      <mandova-ambulance-wl-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </mandova-ambulance-wl-list>
    `);
  });
});
