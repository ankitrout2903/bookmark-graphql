import { Controller, Get, Param, ParseIntPipe, Post, Delete, Patch, Body, UseGuards } from '@nestjs/common';
import { JwtGuard } from '../auth/guard';
import { BookmarkService } from './bookmark.service';
import { GetUser } from '../auth/decorator';
import { CreateBookmarkInput, EditBookmarkInput } from './dto';
// import { UseGuards } from '@nestjs/graphql';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Bookmark } from './bookmark.model';

@Resolver(() => Bookmark)
@UseGuards(JwtGuard)
@Controller('bookmarks')
export class BookmarkController {
  constructor(private bookmarkService: BookmarkService) {}

  @Query(() => [Bookmark])
  async bookmarks(@GetUser('id') userId: number) {
    return this.bookmarkService.getBookmarks(userId);
  }

  @Query(() => Bookmark)
  async bookmark(@GetUser('id') userId: number, @Args('id', ParseIntPipe) bookmarkId: number) {
    return this.bookmarkService.getBookmarkById(userId, bookmarkId);
  }

  @Mutation(() => Bookmark)
  async createBookmark(@GetUser('id') userId: number, @Args('input') input: CreateBookmarkInput) {
    return this.bookmarkService.createBookmark(userId, input);
  }

  @Mutation(() => Bookmark)
  async editBookmark(@GetUser('id') userId: number, @Args('id', ParseIntPipe) bookmarkId: number, @Args('input') input: EditBookmarkInput) {
    return this.bookmarkService.editBookmarkById(userId, bookmarkId, input);
  }

  @Mutation(() => Boolean)
  async deleteBookmark(@GetUser('id') userId: number, @Args('id', ParseIntPipe) bookmarkId: number) {
    return this.bookmarkService.deleteBookmarkById(userId, bookmarkId);
  }
}
