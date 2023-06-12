import { Args, ID, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { Bookmark } from './bookmark.model';
import { BookmarkService } from './bookmark.service';
import { CreateBookmarkInput, EditBookmarkInput } from './dto';

@Resolver(() => Bookmark)
export class BookmarkResolver {
  constructor(private bookmarkService: BookmarkService) {}

  @Query(() => [Bookmark])
  async bookmarks(@Args('userId', { type: () => ID }) userId: number): Promise<Bookmark[]> {
    return this.bookmarkService.getBookmarks(userId);
  }

  @Query(() => Bookmark, { nullable: true })
  async bookmark(
    @Args('userId', { type: () => ID }) userId: number,
    @Args('bookmarkId', { type: () => ID }) bookmarkId: number,
  ): Promise<Bookmark | null> {
    return this.bookmarkService.getBookmarkById(userId, bookmarkId);
  }

  @Mutation(() => Bookmark)
  async createBookmark(
    @Args('userId', { type: () => ID }) userId: number,
    @Args('input') input: CreateBookmarkInput,
  ): Promise<Bookmark> {
    return this.bookmarkService.createBookmark(userId, input);
  }

  @Mutation(() => Bookmark)
  async updateBookmark(
    @Args('userId', { type: () => ID }) userId: number,
    @Args('bookmarkId', { type: () => ID }) bookmarkId: number,
    @Args('input') input: EditBookmarkInput,
  ): Promise<Bookmark> {
    return this.bookmarkService.editBookmarkById(userId, bookmarkId, input);
  }

  @Mutation(() => Boolean)
  async deleteBookmark(
    @Args('userId', { type: () => ID }) userId: number,
    @Args('bookmarkId', { type: () => ID }) bookmarkId: number,
  ): Promise<boolean> {
    await this.bookmarkService.deleteBookmarkById(userId, bookmarkId);
    return true;
  }
}
