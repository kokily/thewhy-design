interface ItemType {
  id: number;
  subTitle: string;
  subUrl: string;
}

interface MenuType {
  id: number;
  title: string;
  url: string;
  items?: ItemType[];
}

interface MainLinkType {
  id: number;
  url: string;
  img: string;
  title: string;
  sub: string;
}

interface EducationType {
  img: string;
  title: string;
  body: string;
  list: ListType[];
}

interface ListType {
  img: string;
  list: string[];
  end?: boolean;
}

interface OutlineType {
  title: string;
  first: {
    id: number;
    firstTitle: string;
    firstChild?: {
      secondTitle: string;
      secondChild?: string[];
    }[];
  }[];
}
