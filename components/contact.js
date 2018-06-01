var Contact = React.createClass({
  propTypes: {
    item: React.PropTypes.object.isRequired,
  },

  render: function() {
    return (
        <div className={'contactItem'}>
            <img className={'contactImage'} src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGkOo7f9urcUgAncwUHBvDRQVycjhpRsrXOO7Prag0W-oTpCSw'}/>
            <p className={'contactLabel'}>
                Imię: + {this.props.item.firstName}
            </p>
            <p className={'contactLabel'}>
                Nazwisko: + {this.props.item.lasttName}
            </p>
            <a className={'contactEmail'} href={'mailto:' + this.props.item.email}>
               {this.props.item.email}
            </a>
        </div>
    )
  },
});