function vote(choice){

    document.getElementById("results").classList.remove("hidden");

    const buttons = document.querySelectorAll(".vote-buttons button");

    buttons.forEach(button => {
        button.disabled = true;
    });

    console.log("User voted:", choice);
}
