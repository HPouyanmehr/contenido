const extractHeadings = (markdown: string): { [key: string]: string[] } => {
  const headings: { [key: string]: string[] } = {};
  const lines = markdown.split('\n');
  let currnetHeading: string | null = null;

  for (let line of lines) {
    const isH2 = line.startsWith('## ');
    const isH3 = line.startsWith('### ');

    if (isH2) {
      line = line.replace(/(## |\r\n|\n|\r)/gm, '');
      headings[line] = [];
      currnetHeading = line;
    } else if (isH3 && currnetHeading) {
      line = line.replace(/(### |\r\n|\n|\r)/gm, '');
      headings[currnetHeading] = [...headings[currnetHeading], line];
    }
  }

  return headings;
};

export default extractHeadings;
