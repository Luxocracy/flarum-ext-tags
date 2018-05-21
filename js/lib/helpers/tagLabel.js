import extract from 'flarum/utils/extract';

export default function tagLabel(tag, attrs = {}) {
  attrs.style = attrs.style || {};
  attrs.className = 'TagLabel ' + (attrs.className || '');

  const link = extract(attrs, 'link');

  if (tag) {
    const color = tag.color();
    const background = tag.backgroundUrl();

    if (background) {
      attrs.style.color = '#fff'; // Force white
      attrs.style.backgroundColor = color;
      attrs.className += ' background';
    } else if (color) {
      attrs.style.backgroundColor = attrs.style.color = color;
      attrs.className += ' colored';
    }

    if (link) {
      attrs.title = tag.description() || '';
      attrs.href = app.route('tag', {tags: tag.slug()});
      attrs.config = m.route;
    }
  } else {
    attrs.className += ' untagged';
  }

  return (
    m((link ? 'a' : 'span'), attrs,
      <span className="TagLabel-text">
        {tag ? tag.name() : app.translator.trans('flarum-tags.lib.deleted_tag_text')}
      </span>
    )
  );
}
