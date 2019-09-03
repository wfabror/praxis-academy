#!/bin/bash

find /home/$user/ -name index.java -o -name song.mp3 | while read file
do
if ["$(file)"!='']
then 
echo "Files found $file";
dir_name="echo "$file" | sed s`/index.*$\|song.*//`";
echo -e "Dir to check $dir_name\n";
fi
done
