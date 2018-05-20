import Component from 'flarum/Component';

export default class TagHero extends Component {
  view() {
    const tag = this.props.tag;
    const color = tag.color();
    const background = tag.backgroundUrl();
    const tagHeroPos = tag.tagHeroPos();
    const extraTags = background ? ' TagHero--background' : color ? ' TagHero--colored' : '';

    return (
      <header className={'Hero TagHero' + extraTags} style={tagStyle}>
        <div className="container">
          <div className="containerNarrow">
            <h2 className="Hero-title">{tag.name()}</h2>
            <div className="Hero-subtitle">{tag.description()}</div>
          </div>
        </div>
      </header>
    );
  }
}
