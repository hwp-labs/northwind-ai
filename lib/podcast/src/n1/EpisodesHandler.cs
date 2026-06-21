// -------------------------------------------------------
// N+1 Problem Query Optimization (C#)
//
// Author: Northwind AI <northwindai.org>
// Date: 2026-06-19
// -------------------------------------------------------

using Abp.Domain.Repositories;
using Microsoft.EntityFrameworkCore;
using NorthwindAI.Podcast.Episodes.Abstractions;
using NorthwindAI.Podcast.Episodes.Domain;
using NorthwindAI.Podcast.Guest.Domain;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NorthwindAI.Podcast.Episodes
{
  public enum EpisodeStatus { Queued, Published }
  public record EpisodeDto(int Id, string Topic, string Datetime, Guest Guest);
  public class EpisodesHandler(IRepository<Episode, long> episodeRepo) : IEpisodesHandler
  {
    public async Task<List<EpisodeDto>> GetAllAsync()
    {
      return await episodeRepo.GetAll()
        .Select(episode => new EpisodeDto(
          episode.Id,
          episode.Topic,
          episode.Datetime,
          episode.Guest
        ))
        .ToListAsync();
    }

    public async Task<List<EpisodeDto>> PublishManyAsync(List<long> ids)
    {
      var episodes = await episodeRepo.GetAll()
        .Include(episode => episode.Guest)
        .Where(episode => ids.Contains(episode.Id)).ToListAsync();

      foreach (var episode in episodes)
      {
        episode.Status = EpisodeStatus.Published;
        await episodeRepo.UpdateAsync(episode);
      }

      return await episodes.Select(episode => new EpisodeDto(
          episode.Id,
          episode.Topic,
          episode.Datetime,
          episode.Guest
        ))
        .ToList(); // not .ToListAsync()
    }
  }
}

