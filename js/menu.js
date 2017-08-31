export default function (nga, admin) {
    return nga.menu()
        .addChild(nga.menu()
            .title('Users')
            .icon('<span class="fa fa-user fa-fw"></span>')
            .active(path => path.indexOf('/users') === 0) // active() is the function that determines if the menu is active
            .link('/users/list')
        )
    ;
}
