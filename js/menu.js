export default function (nga) {
    return nga.menu()
        .addChild(nga.menu()
            .title("New line")
            .icon('<span class="fa fa-users fa-fw"></span>')
        )
        .addChild(nga.menu()
            .title('Users')
            .icon('<span class="fa fa-user fa-fw"></span>')
            .active(path => path.indexOf('/users') === 0) // active() is the function that determines if the menu is active
            .link('/users/list')
        )
    ;
}
