
/* 
    higher order component don't normally follow the same convention 
    as regular react components (having capital letter at the beginning of variable name)
    The reason is: the higher component never display them inside JSX, 
    which is why we don't need it to start with capital letter.
*/

export const printProps = Component => {
    return (props) => {
        console.log(props);

        return <Component {...props} />
    }
}

export const UserInfoWrapped = Component => {
    return (props) => {
        console.log(props);

        return <Component {...props} />
    }
}

