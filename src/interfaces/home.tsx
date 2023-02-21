import { AbstractView, SyntheticEvent } from "react";

interface HomeSearchInterface {
  searchText: String,
  setSearchText: Function,
}

interface LandingPageInterface {
  searchText: String,
}

interface UIEvent<T = Element> extends SyntheticEvent<T> {
  detail: number;
  view: AbstractView;
}

export type {HomeSearchInterface, LandingPageInterface, UIEvent}