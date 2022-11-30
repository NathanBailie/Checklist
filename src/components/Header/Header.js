import './header.scss';


const Header = ({ all, active, finished }) => {
	return (
		<div className='header'>
			<h1>
				Welcome to CheckList
			</h1>

			<div className="header__statistic">
				<p>All notes:
					<span className='header__all'>{all}</span>
				</p>

				<p>Active:
					<span className='header__active'>{active}</span>
				</p>

				<p>Finished:
					<span className='header__finished'>{finished}</span>

				</p>
			</div>
		</div>
	);
};

export default Header;