import type { Schema, Attribute } from '@strapi/strapi';

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

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'section.section-two-columns': SectionSectionTwoColumns;
      'section.section-metadata': SectionSectionMetadata;
    }
  }
}
