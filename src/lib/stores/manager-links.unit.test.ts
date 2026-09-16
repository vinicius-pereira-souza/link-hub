import { createManagerLinkStore } from "./manager-links";
import type { LinkItem } from "../definitions";

describe("list link manager", () => {
  it("should initialize with default state values", () => {
    const store = createManagerLinkStore();

    expect(store.getState().hasChanges).toBeFalsy();
    expect(store.getState().links).toHaveLength(0);
    expect(store.getState().linksRemoved).toHaveLength(0);
  });

  it(`should add new link and set hasChanges to true`, () => {
    const store = createManagerLinkStore();

    const randomId = Math.random().toString();

    const mockLink: LinkItem = {
      id: randomId,
      title: "",
      url: "",
      iconName: "Website",
      is_active: true,
      position_at: 0,
      isNew: true,
    };

    store.getState().addLink(mockLink);

    expect(store.getState().links).toHaveLength(1);
    expect(store.getState().hasChanges).toBeTruthy();
  });

  it(`should update link and set hasChanges to true`, () => {
    const randomId = Math.random().toString();
    const store = createManagerLinkStore({
      hasChanges: false,
      linksRemoved: [],
      links: [
        {
          id: randomId,
          title: "",
          url: "",
          iconName: "Website",
          is_active: true,
          position_at: 0,
          isNew: true,
        },
      ],
    });

    const updatedData = { title: "instagram", url: "https://instagram.com" };
    store.getState().updateLink(randomId, updatedData);

    const linkUpdated = store
      .getState()
      .links.filter((link) => link.id === randomId);

    expect(store.getState().hasChanges).toBeTruthy();
    expect(linkUpdated[0].title).toBe("instagram");
    expect(linkUpdated[0].url).toBe("https://instagram.com");
  });

  it(`should remove link by ID and track it in linksRemoved`, () => {
    const randomId = Math.random().toString();
    const store = createManagerLinkStore({
      hasChanges: false,
      linksRemoved: [],
      links: [
        {
          id: randomId,
          title: "",
          url: "",
          iconName: "Website",
          is_active: true,
          position_at: 0,
          isNew: true,
        },
      ],
    });

    store.getState().deleteLink(randomId);

    expect(store.getState().links).toHaveLength(0);
    expect(store.getState().linksRemoved).toHaveLength(1);
  });

  it(`must set a new list of links`, () => {
    const originalLinks: Array<LinkItem> = [
      {
        id: "ID001",
        title: "",
        url: "",
        iconName: "Website",
        is_active: true,
        position_at: 0,
        isNew: true,
      },
      {
        id: "ID002",
        title: "",
        url: "",
        iconName: "Website",
        is_active: true,
        position_at: 0,
        isNew: true,
      },
    ];

    const newLinks: Array<LinkItem> = [
      {
        id: "ID001",
        title: "",
        url: "",
        iconName: "Website",
        is_active: true,
        position_at: 0,
        isNew: true,
      },
    ];

    const store = createManagerLinkStore({
      hasChanges: false,
      linksRemoved: [],
      links: originalLinks,
    });

    expect(store.getState().links).toHaveLength(2);
    store.getState().setLinks(newLinks);
    expect(store.getState().links).toHaveLength(1);
  });
});
