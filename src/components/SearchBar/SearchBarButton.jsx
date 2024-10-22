import SearchIcon from '@/assets/Search.svg';

// eslint-disable-next-line react/prop-types
function SearchBarButton({ pressButton }) {
  return (
    <div>
      <div
        style={{ width: 60, height: 60, position: 'relative', left: 0, opacity: 0.6, cursor: 'pointer' }}
        onClick={() => {
          pressButton();
        }}
      >
        <div style={{ width: 60, height: 60, left: 0, position: 'absolute' }}></div>
        <img
          src={SearchIcon}
          alt="search"
          style={{ width: 43.72, height: 43.72, left: 7.5, top: 7.5, position: 'absolute' }}
        />
      </div>
    </div>
  );
}

export default SearchBarButton;
