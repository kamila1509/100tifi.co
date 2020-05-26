const Header = () => {
    const view = `
    <div class="Header-main">
        <div class="Header-Logo">
            <h1>
                <a href="">100tifi.co</a>
            </h1>
        </div>
        <div id="myLinks" class="Header-nav">
            <a href="#/about">
            About
            </a><br>
            <a href="#/all-locations">
            Locations
            </a><br>
            <a href="#/all-episodes">
            Episodes
            </a><br>
        </div>
        <a class="icon" onclick="">
            <i class="fa fa-bars"></i>
        </a>
    </div>
    `;
    return view;
};
export default Header


