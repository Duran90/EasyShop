const footer = document.getElementById("footer");

class ReactFooter extends React.Component {
    logo = () => {
        return (
            <div className="col-xs-4 col-md-4 footer teex-left" id="footer-left">

                <ul className="ulFooter"><li><i className="far fa-copyright"/>Dream Team2018</li></ul>
            </div>
        )
    };
    ul1 = () => {
        return (
            <div className="col-xs-4 col-md-4 footer" id="footer-center">
                <ul className="ulFooter">
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        )
    };
    // ul2 =()=>{
    //     return(
    //         <div className="col-xs-4 col-md-2 footer teex-left">
    //             <ul className="ulFooter">
    //                 <li><a href="#"><i className="fab fa-facebook-square"/>Facebook</a></li>
    //                 <li><a href="#"><i className="fab fa-twitter-square"/>Twitter</a></li>
    //                 <li><a href="#"><i className="fab fa-instagram"/>Instagram</a></li>
    //             </ul>
    //         </div>
    //     )
    // };
    // address = () => {
    //     return(
    //         <div className="col-xs-8 col-md-3 footer">
    //             <p>Subscript to our newsletter:</p>
    //             <form className="navbar-form navbar-left" action="#">
    //                 <div className="input-group">
    //                     <input type="email" className="form-control whiteText" placeholder="Email Address" />
    //                     <div className="input-group-btn">
    //                         <button className="btn btn-default redBackground" type="submit">
    //                             <i className="far fa-envelope whiteText"/>
    //                         </button>
    //                     </div>
    //                 </div>
    //             </form>
    //         </div>
    //     )
    // };
    info = () => {
        return(
            <div className="col-xs-4 col-md-4 footer" id="footer-right">
                <ul className="ulFooter">
                <li>Plaut 10, Rehovot</li>
                <li>+972586688567</li>
                </ul>
            </div>
        )
    };

    render = () => {
        return (
            <div className="container-fluid row">
                {this.logo()}
                {this.ul1()}
                {/*{this.ul2()}*/}
                {/*{this.address()}*/}
                {this.info()}
            </div>
        )
    }
}

ReactDOM.render(<ReactFooter/>, footer);