import footerTemplate from './footer.html';

export default function pgFooter() {
    return {
        restrict: 'E',
        replace: true,
        template: footerTemplate
    }
}