var Contacts = React.createClass({
  propTypes: {
    items: React.PropTypes.array.isRequired,
  },

    render: function() {
        var contacts = this.props.items.map(function(contact) {
            return (
                <contact>
                    {item: contact}
                    {key: contact.id}
                </contact>
                <ul className={'contactsList'}>
                    {contacts}
                </ul>
            )
        })
    }
});