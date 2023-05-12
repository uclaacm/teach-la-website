#!/bin/bash

# Specify the folder path containing the files
folder_path="/Users/lilyzhou/Desktop/teach-la-website/_team/inactive-members"

# Loop through each file in the folder
for file in "$folder_path"/*; do
    if [ -f "$file" ]; then
        # Read the content of the file
        file_content=$(cat "$file")

        # Check if the "group" field exists and is not equal to "member"
        if [[ $file_content =~ ^group:[[:space:]]*([^[:space:]]+) ]]; then
            file_group="${BASH_REMATCH[1]}"
            if [ "$file_group" != "member" ]; then
                # Replace the "group" field with "member" in the file content
                updated_content=$(echo "$file_content" | sed "s/group:[[:space:]]*$file_group/group: member/")

                # Write the updated content back to the file
                echo "$updated_content" > "$file"
                echo "Changed group for $file to 'member'"
            fi
        fi
    fi
done
