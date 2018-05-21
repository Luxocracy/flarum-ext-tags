import Component from 'flarum/Component';

export default class TagHero extends Component {
  view() {
    const tag = this.props.tag;
    const color = tag.color();
    const background = tag.backgroundUrl();
    const tagHeroPos = tag.tagHeroPos();

    return (
      <header className={'Hero TagHero' + (background ? ' TagHero--background' : color ? ' TagHero--colored' : '')} style={tagHeroPos && tagHeroPos ? { color: '#fff', backgroundColor: color, backgroundImage: background, backgroundPosition: tagHeroPos } : background ? { color: '#fff', backgroundColor: color, backgroundImage: background } : color ? { color: '#fff', backgroundColor: color } : ''}>
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
