const fs = require('fs');
const path = require('path');

const coreSymbolsDir = path.join(__dirname, '../content/frontend/Core Symbols');

// Get all .md files in the directory
const files = fs.readdirSync(coreSymbolsDir).filter(f => f.endsWith('.md'));

let updatedCount = 0;
let skippedCount = 0;

for (const file of files) {
    const filePath = path.join(coreSymbolsDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Skip files that don't have the old format
    if (!content.includes('for more details and examples on core symbols')) {
        skippedCount++;
        continue;
    }
    
    // Extract symbol name from filename (without .md)
    const symbolName = file.replace('.md', '');
    
    // Check if it has the old format with triple backticks (no language specifier)
    const oldFormatRegex = /^# (.+)\n\n```\n([\s\S]*?)\n```\n/m;
    const match = content.match(oldFormatRegex);
    
    if (match) {
        const title = match[1];
        const descriptionBlock = match[2].trim();
        
        // Split description into lines and format with inline backticks
        const descLines = descriptionBlock.split('\n').filter(line => line.trim());
        
        // Convert description lines to use inline backticks for code
        const formattedDescLines = descLines.map(line => {
            // Replace patterns like "Function[args]" with `Function[args]`
            // Also handle patterns like "x++" with backticks
            return line.replace(/^(\w+(?:\[\[.*?\]\]|\[.*?\]|[+\-*\/=<>!]+\S*))\s+/g, '`$1` ')
                       .replace(/(\w+(?:\[\[.*?\]\]|\[.*?\])[^`\s]*)/g, (match, p1) => {
                           // Don't double-wrap if already has backticks nearby
                           return `\`${p1}\``;
                       });
        });
        
        // Create examples based on the symbol type
        const examples = generateExamples(symbolName, descLines);
        
        // Build new content
        let newContent = `# ${title}\n\n`;
        
        // Add formatted description lines
        for (const line of descLines) {
            newContent += formatDescriptionLine(line) + '\n\n';
        }
        
        // Add examples section
        newContent += examples;
        
        // Add footer with specific URL
        newContent += `*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/${symbolName}.html) for more details.*\n`;
        
        fs.writeFileSync(filePath, newContent);
        updatedCount++;
    } else {
        // File has different structure, just update the footer
        const newFooter = `*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/${symbolName}.html) for more details.*`;
        content = content.replace(
            /\*Please visit the official \[Wolfram Language Reference\]\(https:\/\/reference\.wolfram\.com\/language\/\) for more details and examples on core symbols\.\*/g,
            newFooter
        );
        fs.writeFileSync(filePath, content);
        updatedCount++;
    }
}

function formatDescriptionLine(line) {
    // Format function signatures and symbols with inline backticks
    // Match patterns like FunctionName[args] or x++ etc
    let formatted = line;
    
    // Match function calls like FunctionName[...] or FunctionName[..., ...]
    formatted = formatted.replace(/\b([A-Z][a-zA-Z0-9]*(?:\[\[?[^\]]*\]?\]?))/g, '`$1`');
    
    // Match operators like x++, ++x, x--, --x
    formatted = formatted.replace(/\b([a-z]+)(\+\+|--)/g, '`$1$2`');
    formatted = formatted.replace(/(\+\+|--)([a-z]+)\b/g, '`$1$2`');
    
    // Clean up any double backticks
    formatted = formatted.replace(/``/g, '`');
    
    // Fix cases where we might have backtick issues
    formatted = formatted.replace(/`+/g, (match) => match.length % 2 === 0 ? '' : '`');
    
    return formatted;
}

function generateExamples(symbolName, descLines) {
    let examples = '## Examples\n\n';
    
    // Generate a basic example based on the symbol
    const firstDesc = descLines[0] || '';
    
    // Create a simple example
    examples += '```wolfram\n';
    examples += `${symbolName}[...]\n`;
    examples += '```\n\n';
    
    return examples;
}

console.log(`Updated: ${updatedCount} files`);
console.log(`Skipped: ${skippedCount} files (already in new format)`);
console.log(`Total: ${files.length} files processed`);
