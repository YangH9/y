ffmpeg -i tiebiaotongmu.mp4 -c:v libx264 -c:a aac -crf 30 -b:a 64k -vf scale=-1:240 tiebiaotongmu-out.mp4
ffmpeg -i tiebiaotongmu.mp4 -c:v libx264 -c:a aac -crf 30 -b:a 64k -vf scale=-1:240 -bufsize 120k tiebiaotongmu-out.mp4
ffmpeg -i tiebiaotongmu.mp4 -c:v libvpx-vp9 -c:a libopus -b:v 200k -b:a 64k -vf scale=-1:240 tiebiaotongmu-out.webm
ffmpeg -i a.mp4 -c:v libx264 -c:a aac -crf 30 -b:a 64k -vf scale=-1:240 -f ssegment -segment_format mpegts -segment_list playlist.m3u8 -segment_time 10 %03d.ts
