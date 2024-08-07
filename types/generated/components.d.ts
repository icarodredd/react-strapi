import type { Schema, Attribute } from '@strapi/strapi';

export interface SectionTextGrid extends Schema.Component {
  collectionName: 'components_section_text_grids';
  info: {
    displayName: 'text_grid';
    icon: 'alien';
  };
  attributes: {
    title: Attribute.String;
    desc: Attribute.String;
  };
}

export interface SectionSectionTwoColumns extends Schema.Component {
  collectionName: 'components_section_section_two_columns';
  info: {
    displayName: 'section_two_columns';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    desc: Attribute.Text;
    img: Attribute.Media<'images'>;
  };
}

export interface SectionSectionMetadata extends Schema.Component {
  collectionName: 'components_section_section_metadata';
  info: {
    displayName: 'section_metadata';
    icon: 'archive';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    section_id: Attribute.String;
    background: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
  };
}

export interface SectionSectionGrid extends Schema.Component {
  collectionName: 'components_section_section_grids';
  info: {
    displayName: 'section_grid';
    icon: 'fileError';
  };
  attributes: {
    title: Attribute.String;
    text_grid: Attribute.Component<'section.text-grid', true>;
    img_grid: Attribute.Component<'section.img-grid', true>;
    metadata: Attribute.Component<'section.section-metadata'>;
  };
}

export interface SectionImgGrid extends Schema.Component {
  collectionName: 'components_section_img_grids';
  info: {
    displayName: 'img-grid';
    icon: 'archive';
  };
  attributes: {
    img: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'section.text-grid': SectionTextGrid;
      'section.section-two-columns': SectionSectionTwoColumns;
      'section.section-metadata': SectionSectionMetadata;
      'section.section-grid': SectionSectionGrid;
      'section.img-grid': SectionImgGrid;
    }
  }
}
