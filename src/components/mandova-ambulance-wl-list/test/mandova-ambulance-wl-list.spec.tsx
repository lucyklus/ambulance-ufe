import { newSpecPage } from '@stencil/core/testing';
import { MandovaAmbulanceWlList } from '../mandova-ambulance-wl-list';

describe('mandova-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MandovaAmbulanceWlList],
      html: `<mandova-ambulance-wl-list></mandova-ambulance-wl-list>`,
    });
    const wlList = page.rootInstance as MandovaAmbulanceWlList;
    const expectedPatients = wlList?.waitingPatients?.length;

    const items = page.root.shadowRoot.querySelectorAll('md-list-item');
    expect(items.length).toEqual(expectedPatients);
  });
});
