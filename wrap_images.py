import re

# Read the file
with open('content/blog/ppt/index.mdx', 'r') as f:
    content = f.read()

# Pattern: Line 837 image
pattern = r'(```\n\n)!\[\]\(\.\/Screenshot-2025-04-02-at-16\.29\.13-504a54b42940bad2ac6f7c6d1eb0644c\.png\)(\n\nEach slider)'

replacement = r'\1<div className="invertColor">\n\n![](./Screenshot-2025-04-02-at-16.29.13-504a54b42940bad2ac6f7c6d1eb0644c.png)\n\n</div>\2'

content = re.sub(pattern, replacement, content)

# Write back
with open('content/blog/ppt/index.mdx', 'w') as f:
    f.write(content)

print("Wrapped image successfully")
