var moment = require('moment');
var fromNow = v => moment(v).fromNow();

export default function (nga, admin) {

    return nga.dashboard()
        .addCollection(nga.collection(admin.getEntity('users'))
            .name('new_users')
            .title('New users')
            .fields([
                nga.field('avatar', 'template')
                    .label('')
                    .template('<i class="fa fa-user fa-lg">'),
                nga.field('user_name', 'template') // use username for sorting
                    .label('Username')
                    .isDetailLink(true)
                    .template('{{ entry.values.username }}'),
                nga.field('last_seen', 'datetime')
                    .map(fromNow),
            ])
            .sortDir('DESC')
            .perPage(4)
        )
        .template(`
<div class="row dashboard-starter"></div>
<dashboard-summary></dashboard-summary>
<div class="row dashboard-content">
    <div class="col-lg-12">
        <div class="panel panel-default">
            <ma-dashboard-panel collection="dashboardController.collections.new_users" entries="dashboardController.entries.new_users" datastore="dashboardController.datastore"></ma-dashboard-panel>
        </div>
    </div>
</div>
`);
}
