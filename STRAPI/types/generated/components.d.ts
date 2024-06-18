import type { Schema, Attribute } from '@strapi/strapi';

export interface HeaderHero extends Schema.Component {
  collectionName: 'components_header_heroes';
  info: {
    displayName: 'Hero';
    icon: 'picture';
    description: '';
  };
  attributes: {
    cabecalho: Attribute.Component<'header.topheader'>;
  };
}

export interface HeaderSlider extends Schema.Component {
  collectionName: 'components_header_sliders';
  info: {
    displayName: 'Slider';
  };
  attributes: {};
}

export interface HeaderTopheader extends Schema.Component {
  collectionName: 'components_header_topheaders';
  info: {
    displayName: 'topheader';
  };
  attributes: {
    logotipo: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface MenuDropdown extends Schema.Component {
  collectionName: 'components_menu_dropdowns';
  info: {
    displayName: 'Dropdown';
    icon: 'arrowDown';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    session_ms: Attribute.Relation<
      'menu.dropdown',
      'oneToMany',
      'api::session-m.session-m'
    >;
  };
}

export interface MenuLinkMenu extends Schema.Component {
  collectionName: 'components_menu_link_menus';
  info: {
    displayName: 'link_menu';
    icon: 'link';
  };
  attributes: {
    titulo: Attribute.String;
    Url: Attribute.String;
  };
}

export interface MenuLink extends Schema.Component {
  collectionName: 'components_menu_links';
  info: {
    displayName: 'Link';
    icon: 'link';
  };
  attributes: {
    label: Attribute.String;
    Url: Attribute.String;
    style: Attribute.Enumeration<['none', 'secundary', 'primary']> &
      Attribute.DefaultTo<'none'>;
  };
}

export interface MenuMenubutton extends Schema.Component {
  collectionName: 'components_menu_menubuttons';
  info: {
    displayName: 'Menubutton';
    icon: 'cursor';
  };
  attributes: {
    title: Attribute.String;
    Url: Attribute.String;
    type: Attribute.Enumeration<['none', 'primary', 'secundary']> &
      Attribute.DefaultTo<'none'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'header.hero': HeaderHero;
      'header.slider': HeaderSlider;
      'header.topheader': HeaderTopheader;
      'menu.dropdown': MenuDropdown;
      'menu.link-menu': MenuLinkMenu;
      'menu.link': MenuLink;
      'menu.menubutton': MenuMenubutton;
    }
  }
}
