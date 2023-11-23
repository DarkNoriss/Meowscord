type DMPageFriendListLabelProps = {
  count: number;
};

const DMPageFriendListLabel = ({ count }: DMPageFriendListLabelProps) => {
  return (
    <div className="mb-2 ml-[30px] mr-5 mt-4 pr-[10px]">
      <span className="text-xs font-semibold uppercase text-muted">
        online — {count}
      </span>
    </div>
  );
};

export default DMPageFriendListLabel;
