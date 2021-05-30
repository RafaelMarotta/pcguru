function confirmacao(id) {
    var resposta = confirm("Tem certeza de que deseja excluir a sua conta?");
    if (resposta == true) {
        window.location.href = "remover.JSON?id=" + id;

        function removeUser(array, id) {
            var result = array.filter(function (user) {
                return user.id == id;
            });

            for (var id of user) {
                var removeUser = array.indexOf(id);
                array.splice(id, 1);
            }
        }
    }

}