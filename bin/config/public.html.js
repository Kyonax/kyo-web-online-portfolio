import _json from "./public.json";

export default function htmlConfiguration() {
  const _meta_field = _json.config.meta_field, _link_field = _json.config.link_field;

  const _content = `
<html lang="${_json.config.page_lang}">
    <head>
        <meta charset="${_meta_field.charset}" />
        <link rel="${_link_field.favicon_url.rel}" href="${_link_field.favicon_url.href}"/>
        <meta name="${_meta_field.viewport_size.name}" content="${_meta_field.viewport_size.content}"/>
        <meta name="${_meta_field.theme_color.name}" content="${_meta_field.theme_color.content}"/>
        <meta name="${_meta_field.description.name}" content="${_meta_field.description.content}"/>
        <link rel="${_link_field.apple_icon_url.rel}" href="${_link_field.apple_icon_url.href}"/>
        <link rel="${_link_field.manifest_url.rel}" href="${_link_field.manifest_url.href}"/>
        <title>${_json.config.page_title}</title>
    </head>
    <body>
        <noscript>${_json.config.noscript}</noscript>
        <div id="${_json.config.main_id}"></div>
    </body>
</html>`;

  return _content;
}
