export const initialData = {
  boards: [
    {
      id: "board-1",
      columnOrder: ["column-3", "column-1", "column-2"],
      columns: [
        {
          id: "column-1",
          boardId: "board-1",
          title: "To do column",
          cardOrder: ["card-3", "card-5", "card-2", "card-1", "card-4"],
          cards: [
            {
              id: "card-1",
              boardId: "board-1",
              columnId: "column-1",
              title: "Title of card 1",
              cover:
                "https://images.pexels.com/photos/193004/pexels-photo-193004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            },
            {
              id: "card-2",
              boardId: "board-1",
              columnId: "column-1",
              title: "Title of card 2",
              cover: null,
            },
            {
              id: "card-3",
              boardId: "board-1",
              columnId: "column-1",
              title: "Title of card 3",
              cover: null,
            },
            {
              id: "card-4",
              boardId: "board-1",
              columnId: "column-1",
              title: "Title of card 4",
              cover: null,
            },
            {
              id: "card-5",
              boardId: "board-1",
              columnId: "column-1",
              title: "Title of card 5",
              cover: null,
            },
          ],
        },
        {
          id: "column-2",
          boardId: "board-1",
          title: "Inprogress column",
          cardOrder: ["card-6", "card-7"],
          cards: [
            {
              id: "card-6",
              boardId: "board-1",
              columnId: "column-2",
              title: "Title of card 6",
              cover: null,
            },
            {
              id: "card-7",
              boardId: "board-1",
              columnId: "column-2",
              title: "Title of card 7",
              cover: null,
            },
          ],
        },
        {
          id: "column-3",
          boardId: "board-1",
          title: "Perfect done",
          cardOrder: ["card-8", "card-9", "card-10", "card-11"],
          cards: [
            {
              id: "card-8",
              boardId: "board-1",
              columnId: "column-3",
              title: "Title of card 8",
              cover: null,
            },
            {
              id: "card-9",
              boardId: "board-1",
              columnId: "column-3",
              title: "Title of card 9",
              cover: null,
            },
            {
              id: "card-10",
              boardId: "board-1",
              columnId: "column-3",
              title: "Title of card 10",
              cover: null,
            },
            {
              id: "card-11",
              boardId: "board-1",
              columnId: "column-3",
              title: "Title of card 11",
              cover: null,
            },
          ],
        },
      ],
    },
  ],
};
