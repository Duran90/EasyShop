const header = document.getElementById("header");
class ReactHeader extends React.Component{
    hamburger = () =>{
        return(
        <div className="navbar-header">
            <!-- Кнопка «Гамбургер» отображается только в мобильном виде (предназначена для открытия основного содержимого Navbar) -->
            <button type="button" className="navbar-toggle collapsed redBackground whiteText" data-toggle="collapse"
                    data-target="#navbar-main">
                <span className="icon-bar"/>
                <span className="icon-bar"/>
                <span className="icon-bar"/>
            </button>
            <!-- Бренд или название сайта (отображается в левой части меню) -->
            <img className="logo" src={"images/indexImg/logo@2x.png"}/>
        </div>
    )};
    list = () =>{
        return(
            <div>
                <ul class="nav navbar-nav">
                    <!--<li><a href="#">CATALOGUE</a></li>-->
                    <li><a href={"cart.html"}>SHOPPING CART</a></li>
                    <li><a href={"map.html"}>STORES LOCATOR</a></li>
                </ul>
            </div>
        )
    };
    city = ()=>{
        return(
            <div class="navbar-right">
                <label for="selectCity" class="whiteText">CITY: </label>
                <select id="selectCity" class="redBackground whiteText">
                    <option class="citys" value="none">Select City</option>
                </select>
            </div>
        )
    };
    listAndCity = () =>{
        return(
            <div className="collapse navbar-collapse" id="navbar-main">
                {this.list()}
                {this.city()}
            </div>
        )
    };


    render = () =>{
        return(
            <nav className="navbar navbar-default navbar-fixed-top navbar-expand-jg redBackground">
                <div className="container-fluid">

                </div>
            </nav>
        )
    }
}
ReactDOM.render(ReactHeader,header);