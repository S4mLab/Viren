import discord
from discord.ext import commands
from discord.ext.audiorec import NativeVoiceClient  # important!
import random
import requests
import string

import os
from dotenv import load_dotenv

load_dotenv()
token = os.getenv('TOKEN')


intents = discord.Intents().all()
client = commands.Bot(command_prefix="!", intents=intents)
client.remove_command('help')


async def sendAudio(audio, id):
    headers = {
        'content-type': "multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW"
    }
    try:
        await requests.post("http://localhost:3000/"+id,data=audio, headers=headers)
    except:
        print("Error sending audio", file={
            id: audio
        })


def generateToken():
    return str(random.randint(000000, 999999))


@client.event
async def on_ready():
    print('im ready')


@client.command()
async def help(ctx):
    embedVar = discord.Embed(title="here are my commands!",
                             description="nuser **!join** to start the recording\nuser **!stop** to stop the recording", color=0x546e7a)
    await ctx.send(embed=embedVar)


@client.command()
async def join(ctx: commands.Context):
    channel: discord.VoiceChannel = ctx.author.voice.channel
    if ctx.voice_client is not None:
        return await ctx.voice_client.move_to(channel)
    await channel.connect(cls=NativeVoiceClient)
    await ctx.invoke(client.get_command('rec'))


@client.command()
async def test(ctx):
    await ctx.send('Hello, my name is Viren!')


@client.command()
async def rec(ctx):
    ctx.voice_client.record(lambda e: print(f"Exception: {e}"))
    embedVar = discord.Embed(title="Started the Recording!",
                             description="use !stop to stop!", color=0x546e7a)
    await ctx.send(embed=embedVar)


@client.command()
async def stop(ctx: commands.Context):
    if not ctx.voice_client.is_recording():
        return
    wav_bytes = await ctx.voice_client.stop_record()
    id = generateToken()
    embedVar = discord.Embed(title="Meeting ID",
                             description="The record has been saved\nMeeting ID: "+id, color=0x546e7a)
    await ctx.send(embed=embedVar)
    # with open(f'{name}.wav', 'wb') as f:
    #     f.write(wav_bytes)

    await sendAudio(wav_bytes, id)
    embedVar = discord.Embed(title="Meeting ID",
                             description=id, color=0x546e7a)
    await ctx.send(embed=embedVar)
    await ctx.voice_client.disconnect()


@rec.before_invoke
async def ensure_voice(ctx):
    if ctx.voice_client is None:
        if ctx.author.voice:
            await ctx.author.voice.channel.connect(cls=NativeVoiceClient)
        else:
            await ctx.send("You are not connected to a voice channel.")
            raise commands.CommandError(
                "Author not connected to a voice channel.")
    elif ctx.voice_client.is_playing():
        ctx.voice_client.stop()


client.run(
    "MTA4MTMyNDQ4MDE3NTAxODA3NQ.GWfrTe.qt0DCu8kq5NpIHIpg-JVe9-pkMR1PF6wPIVvPo")
