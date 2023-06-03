const regExp = /@[a-z][a-z\d-_]{0,20}/gi;

export default function getMentions(content: string) {
  return content.match(regExp) ?? [];
}
