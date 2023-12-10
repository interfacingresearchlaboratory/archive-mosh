import os
import random
from moviepy.editor import VideoFileClip, concatenate_videoclips

def archive_moshing(input_directory, output_file, duration_minutes):
    # Get a list of all video files in the input directory
    video_files = [f for f in os.listdir(input_directory) if f.endswith(".mp4")]

    # Calculate the number of clips needed to achieve the desired duration
    desired_duration = duration_minutes * 60  # Convert minutes to seconds
    total_duration = 0

    # List to store selected video clips
    selected_clips = []

    while total_duration < desired_duration:
        # Randomly select a video clip
        selected_video = random.choice(video_files)
        video_path = os.path.join(input_directory, selected_video)

        # Randomly select a start time within the video clip
        start_time = random.uniform(0, VideoFileClip(video_path).duration - 3)  # Adjusted to 3 seconds

        # Extract a 1-3 second clip from the selected video
        clip = VideoFileClip(video_path).subclip(start_time, start_time + random.uniform(1, 3))  # Adjusted to 1-3 seconds

        # Append the selected clip to the list
        selected_clips.append(clip)

        # Update total duration
        total_duration += clip.duration

    # Concatenate all selected clips into the final collage
    final_collage = concatenate_videoclips(selected_clips, method="compose")

    # Write the final collage to the output file
    final_collage.write_videofile(output_file, codec="libx264", audio_codec="aac", temp_audiofile="temp-audio.m4a", remove_temp=True)

if __name__ == "__main__":
    script_directory = os.path.dirname(os.path.abspath(__file__))
    input_directory = os.path.join(script_directory, 'videos')
    output_file = os.path.join(script_directory, 'output/mosh.mp4')
    duration_minutes = 1  # Change this to your desired duration in minutes

    archive_moshing(input_directory, output_file, duration_minutes)