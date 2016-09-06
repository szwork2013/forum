import Colors from 'material-ui/styles/colors';
const ColorKeys = Object.keys(Colors || {});
Array.prototype.randomElement = function () {
    return this[Math.floor(Math.random() * this.length)]
};

Accounts.onCreateUser(function(options, user) {
    const color = Colors[ColorKeys.randomElement()];
    const background = Colors[ColorKeys.randomElement()];
    const avatar = {color, background};
    Roles.addUsersToRoles(user._id, 'customer');
    user.profile = {...options.profile,avatar};
    return user;
});