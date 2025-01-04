import type { EditorOptions } from 'tinymce';

export const EDITOR_OPTIONS: EditorOptions = {
  height: 500,
  menubar: false,
  readonly: false, // Fix the read-only issue
  plugins: [
    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
    'insertdatetime', 'media', 'table', 'help', 'wordcount',
    'tiny_mce_wiris'
  ],
  toolbar: [
    'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify',
    'bullist numlist outdent indent | removeformat | link image media',
    'tiny_mce_wiris_formulaEditor tiny_mce_wiris_formulaEditorChemistry'
  ].join(' | '),
  branding: false,
  statusbar: false,
  image_title: true,
  automatic_uploads: true,
  file_picker_types: 'image',
  extended_valid_elements: '*[.*]',
  skin: 'oxide',
  icons: 'default',
  promotion: false,
  resize: true,
  min_height: 300,
  max_height: 800,
  autoresize_bottom_margin: 50,
  formats: {
    bold: { inline: 'strong' },
    italic: { inline: 'em' },
    underline: { inline: 'span', styles: { 'text-decoration': 'underline' } },
    strikethrough: { inline: 'span', styles: { 'text-decoration': 'line-through' } }
  }
};