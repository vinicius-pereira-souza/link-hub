import {
  createManagerLinkStore,
  type NewLinkObjectType,
} from "./manager-links";

describe("list link manager", () => {
  it("should initialize with default state values", () => {
    const store = createManagerLinkStore();

    expect(store.getState().isChange).toBeFalsy();
    expect(store.getState().listLink).toHaveLength(0);
  });

  it(`must initialize with the changed state value`, () => {
    const listLink: NewLinkObjectType[] = [
      {
        id: 2,
        title: "LinkedIn",
        url: "https://linkedin.com",
        iconName: "LinkedIn",
      },
    ];
    const store = createManagerLinkStore({
      isChange: true,
      listLink,
    });

    expect(store.getState().isChange).toBeTruthy();
    expect(store.getState().listLink).toBe(listLink);
  });

  it(`must return a new list with the updated object value`, () => {
    const listLink: NewLinkObjectType[] = [
      {
        id: 1,
        title: "Instagr",
        url: "http://instagram.com",
        iconName: "Instagram",
      },
      {
        id: 2,
        title: "LinkedIn",
        url: "https://linkedin.com",
        iconName: "LinkedIn",
      },
    ];

    const store = createManagerLinkStore({
      isChange: true,
      listLink,
    });

    const linkUpdated: NewLinkObjectType = {
      id: 1,
      title: "My Instagram Profile",
      url: "https://instagram.com",
      iconName: "Instagram",
    };

    store.getState().updateLink(linkUpdated);

    const hasLinkUpdated = store
      .getState()
      .listLink.some(
        (link) => JSON.stringify(link) === JSON.stringify(linkUpdated),
      );

    expect(store.getState().isChange).toBeTruthy();
    expect(hasLinkUpdated).toBeTruthy();
  });

  it(`must return a completely new list`, () => {
    const store = createManagerLinkStore();

    const listLink: NewLinkObjectType[] = [
      {
        id: 1,
        title: "Instagr",
        url: "http://instagram.com",
        iconName: "Instagram",
      },
      {
        id: 2,
        title: "LinkedIn",
        url: "https://linkedin.com",
        iconName: "LinkedIn",
      },
    ];

    store.getState().updateList(listLink);
    expect(store.getState().isChange).toBeTruthy();
    expect(store.getState().listLink.length > 0).toBeTruthy();
  });
});
