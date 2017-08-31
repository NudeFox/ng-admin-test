export default function (nga, admin) {

    var user = admin.getEntity('users');

    user.listView()
        .title('Users')
        .fields([
            nga.field('avatar', 'template')
                .label('')
                .template(entry => `<i class="fa fa-user fa-lg">`),
            nga.field('username', 'template') // use last_name for sorting
                .label('Username')
                .isDetailLink(true)
                .template('{{ entry.values.username }}'),
            nga.field('email', 'template')
                .label('E-mail Address')
                .template('{{entry.values.email}}')
                .cssClasses('hidden-xs'),
            nga.field('role', 'template')
                .template('{{ entry.values.role }}')
                .cssClasses('hidden-xs'),
        ])
        .filters([
            nga.field('q', 'template')
                .label('')
                .pinned(true)
                .template('<div class="input-group"><input type="text" ng-model="value" placeholder="Search" class="form-control"></input><span class="input-group-addon"><i class="glyphicon glyphicon-search"></i></span></div>'),
        ])
        .sortField('username')
        .sortDir('DESC')
        .listActions(['edit'])
        .exportFields([
            nga.field('username', 'template').label('Username').template(entry => entry.values.username),
            nga.field('email', 'template').label('E-mail Address').template(entry => entry.values.email),
            nga.field('roles', 'template').template(entry => `${entry.values.role}`),
        ]);
    user.editionView()
        .title('<i class="fa fa-user fa-lg"> {{ entry.values.username}}\'s details')
        .fields([
            nga.field('full_name'),
            nga.field('username'),
            nga.field('email'),
            nga.field('birthday', 'date'),
        ]);

    return user;
}
