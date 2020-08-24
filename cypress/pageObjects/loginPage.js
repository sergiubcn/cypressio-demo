export default {
    path() {
        return "/wp-login.php"
    },

    loginButton() {
        return cy.get("[name='wp-submit']");
    }
}