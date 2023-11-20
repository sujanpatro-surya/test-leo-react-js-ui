import { Box, Link, Stack } from "@mui/material";
import { lightColorPalette } from "../theme/color-palette/lightColorPalette";
import { typographyStyles } from "../theme/typography/typographyStyles";
import { ReactElement } from "react";
import { Card, PageHeader, Plus } from "@surya-digital/leo-reactjs-material-ui";

const NotesPage = (): ReactElement => {
  const AllNoteCards = (): ReactElement => {
    let allNotes: ReactElement[] = [];
    for (let index = 0; index != 9; index++) {
      allNotes.push(<NoteCard title={String(index)} />);
    }
    return <>{allNotes}</>;
  };
  return (
    <>
      <PageHeader
        title={"Notes"}
        actionElement={{
          primaryButton: {
            title: "Add New Note",
            onClick: (): void => {},
            icon: <Plus />,
          },
        }}
      />
      <Box
        padding="32px"
        display="flex"
        flexWrap="wrap"
        justifyContent="flex-start"
        rowGap="32px"
        columnGap="32px"
      >
        <AllNoteCards />
      </Box>
    </>
  );
};

const NoteCard = ({ title }: NotesCardProps): ReactElement => {
  return (
    <Card>
      <Box padding="16px" width="280px" boxSizing="border-box">
        <Stack spacing="8px">
          <Stack>
            <Box sx={typographyStyles.small1}>{title}</Box>
            <Box
              sx={{
                ...typographyStyles.body3,
                color: lightColorPalette.gray[400],
              }}
            >
              {title}
            </Box>
          </Stack>
          <Box sx={typographyStyles.body3}>{notesContent}</Box>
        </Stack>
      </Box>
    </Card>
  );
};

interface NotesCardProps {
  title: string;
}

const notesContent =
  "Lorem ipsum dolor sit amet consectetur. Morbi faucibus nunc elementum eu volutpat. Quis suspendisse consectetur";
export default NotesPage;
