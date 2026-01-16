const welcome = (firstName, lastName) => {
    var fullName = `${firstName} ${lastName}`;

    const displayFullName = () => {
        alert(`Welcome ${fullName}!`);
    };
    displayFullName();
};