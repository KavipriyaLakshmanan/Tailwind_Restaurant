const people = [
  {
    name: "Calvin Hawkins",
    email: "calvin.hawkins@example.com",
    image:
      "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Kristen Ramos",
    email: "kristen.ramos@example.com",
    image:
      "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Ted Fox",
    email: "ted.fox@example.com",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];
const Practice1 = () => {
  return (
    <div>
      <ul className="divide-y divide-gray-200">
        {people.map((person) => (
          <li key={person.email} className="py-4 flex flex-column">
            <img
              className="h-10 w-18 rounded-full"
              src={person.image}
              alt="image"
            />
            <div className="ml-3">
              <a
                className="group/edit invisible hover:bg-slate-200 group-hover/item:visible ..."
                href="tel:{person.phone}"
              />
              <span className="group-hover/edit:text-gray-700 ...">Call</span>
              <p className="text-slate-500">You have a new message!</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Practice1;
